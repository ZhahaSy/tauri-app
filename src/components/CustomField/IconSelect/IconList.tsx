import * as AntdIcons from "@ant-design/icons";
import React, { CSSProperties, useCallback, useState } from "react";
import categories, { datum } from "./field";
import { SegmentedProps } from "antd/lib";
import { Segmented } from "antd";

export const allIcons: { [key: PropertyKey]: any } = AntdIcons;

export const Icon = ({ name, onClick, style }: { name: string; onClick?: () => void; style: CSSProperties }) => {
  return (
    allIcons[name] ? <li
      style={{
        fontSize: "25px",
        padding: '4px',
        ...(style || {}),
      }}
      onClick={onClick}
    >
       {React.createElement(allIcons[name])}
    </li> : null
  );
};

export enum ThemeType {
  Filled = "Filled",
  Outlined = "Outlined",
  TwoTone = "TwoTone",
}

interface IconSearchState {
  theme: ThemeType;
  searchKey: string;
}

const options = (): SegmentedProps["options"] => [
  {
    value: ThemeType.Outlined,
    label: "线框",
  },
  {
    value: ThemeType.Filled,
    label: "实底",
  },
  {
    value: ThemeType.TwoTone,
    label: "双色",
  },
];
export const IconList = ({handleClick}: {handleClick: (name:string) => void}) => {
  const icons = datum;
  const [displayState, setDisplayState] = useState<IconSearchState>({
    searchKey: "",
    theme: ThemeType.Outlined,
  });
  const handleChangeTheme = useCallback((value: ThemeType) => {
    setDisplayState((prevState) => ({
      ...prevState,
      theme: value as ThemeType,
    }));
  }, []);

  return (
    <>
      <Segmented
        value={displayState.theme}
        options={options()}
        onChange={handleChangeTheme}
      />
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "200px",
          maxHeight: "300px",
          overflowY: "auto",
        }}
      >
        {icons.map((item, index) => {
          return <Icon key={item} name={`${item}${displayState.theme}`} onClick={() => {handleClick(`${item}${displayState.theme}`)}} />;
        })}
      </ul>
    </>
  );
};
