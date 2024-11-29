// 配置接口定义
interface TreeConfig {
  uniqueKey?: string;  // 唯一值的键名配置
}

// 树节点类，使用泛型 T 表示节点值的类型
export class TreeNode<T> {
  value: T;                    
  uniqueId: string;            // 节点唯一标识
  parent: TreeNode<T> | null;  
  prev: TreeNode<T> | null;    
  next: TreeNode<T> | null;    
  children: TreeNode<T>[];     

  constructor(value: T, uniqueId?: string) {
    this.value = value;
    this.uniqueId = uniqueId || generateHash();  // 如果没有提供uniqueId，则自动生成
    this.parent = null;
    this.prev = null;
    this.next = null;
    this.children = [];
  }

  // 添加子节点方法
  addChild(node: TreeNode<T>): void {
    this.children.push(node);      // 将新节点添加到子节点数组
    node.parent = this;            // 设置新节点的父节点

    // 处理兄弟节点之间的链接
    if (this.children.length > 1) {
      const prevNode = this.children[this.children.length - 2];
      prevNode.next = node;        // 设置前一个节点的next指针
      node.prev = prevNode;        // 设置新节点的prev指针
    } else {
      node.prev = null;
    }
    node.next = null;
  }

  // 移除子节点方法，支持通过值或唯一标识符删除
  removeChild(nodeOrUniqueId: TreeNode<T> | string): void {
    let nodeToRemove: TreeNode<T> | null = null;

    if (typeof nodeOrUniqueId === 'string') {
      // 通过唯一标识符查找要删除的节点
      nodeToRemove = this.children.find(child => child.uniqueId === nodeOrUniqueId) || null;
    } else {
      nodeToRemove = nodeOrUniqueId;
    }

    if (!nodeToRemove) {
      console.log('Node not found');
      return;
    }

    const index = this.children.indexOf(nodeToRemove);
    if (index > -1) {
      this.children.splice(index, 1);  // 从子节点数组中移除

      // 重新连接兄弟节点的链接
      if (nodeToRemove.prev) {
        nodeToRemove.prev.next = nodeToRemove.next;
      } else if (nodeToRemove.next) {
        this.children[0].prev = null;
      }
      if (nodeToRemove.next) {
        nodeToRemove.next.prev = nodeToRemove.prev;
      }

      // 清除被移除节点的引用
      nodeToRemove.parent = null;
      nodeToRemove.prev = null;
      nodeToRemove.next = null;
    }
  }

  // 查找具有特定值的直接子节点
  findChild(value: T): TreeNode<T> | null {
    for (const child of this.children) {
      if (child.value === value) {
        return child;
      }
    }
    return null;
  }

  // 打印树结构，level参数表示缩进级别
  printTree(level: number = 0): void {
    this.children.forEach((child) => {
      child.printTree(level + 1);
    });
  }

  // 在当前节点之前插入新节点
  insertNodeBefore(node: TreeNode<T>): void {
    if (!this.parent) return;  // 如果没有父节点，无法插入

    const index = this.parent.children.indexOf(this);
    if (index === -1) return;

    // 设置新节点的关系
    node.parent = this.parent;
    node.next = this;
    node.prev = this.prev;

    // 更新相邻节点的关系
    if (this.prev) {
      this.prev.next = node;
    }
    this.prev = node;

    // 在父节点的children数组中插入
    this.parent.children.splice(index, 0, node);
  }

  // 在当前节点之后插入新节点
  insertNodeAfter(node: TreeNode<T>): void {
    if (!this.parent) return;

    const index = this.parent.children.indexOf(this);
    if (index === -1) return;

    // 设置新节点的关系
    node.parent = this.parent;
    node.prev = this;
    node.next = this.next;

    // 更新相邻节点的关系
    if (this.next) {
      this.next.prev = node;
    }
    this.next = node;

    // 在父节点的children数组中插入
    this.parent.children.splice(index + 1, 0, node);
  }

  // 获取以当前节点为根的值树
  getValueTree(): { value: T, children: Array<{ value: T, children: any[] }> } {
    return {
      value: this.value,
      children: this.children.map(child => child.getValueTree())
    };
  }
}

// 树类，管理整个树结构
export class Tree<T> {
  root: TreeNode<T>;
  private config: TreeConfig;

  constructor(rootValue: T, config: TreeConfig = { uniqueKey: 'key' }) {
    this.config = config;
    this.root = new TreeNode(rootValue);
  }

  // 通过唯一值查找节点
  findNodeByUniqueId(uniqueId: string): TreeNode<T> | null {
    return this._findNodeByUniqueId(this.root, uniqueId);
  }

  private _findNodeByUniqueId(node: TreeNode<T>, uniqueId: string): TreeNode<T> | null {
    if (node.uniqueId === uniqueId) {
      return node;
    }

    for (const child of node.children) {
      const found = this._findNodeByUniqueId(child, uniqueId);
      if (found) return found;
    }

    return null;
  }

  // 重写addChild方法，支持通过唯一值添加节点
  addChild(parentValue: T | string, childValue: T): void {
    let parent: TreeNode<T> | null = null;
    
    if (typeof parentValue === 'string') {
      // 通过唯一值查找父节点
      parent = this.findNodeByUniqueId(parentValue);
    } else {
      // 通过值查找父节点
      parent = this._findNode(this.root, parentValue);
    }

    if (parent) {
      const newNode = new TreeNode(childValue);
      parent.addChild(newNode);
    } else {
      console.log('Parent node not found');
    }
  }

  // 私有方法：递归查找具有特定值的节点
  private _findNode(node: TreeNode<T>, value: T): TreeNode<T> | null {
    if (node.value === value) {
      return node;
    }

    for (const child of node.children) {
      const found = this._findNode(child, value);
      if (found) {
        return found;
      }
    }

    return null;
  }

  // 打印整个树结构
  printTree(): void {
    this.root.printTree();
  }

  // 获取整个值树
  getValueTree() {
    return this.root.getValueTree();
  }
}

// 生成唯一Hash的辅助函数
function generateHash(): string {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
}