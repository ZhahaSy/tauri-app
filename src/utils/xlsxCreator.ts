import { exportJsonToExcel } from '@papb/json-excel';

console.log(exportJsonToExcel);

export default async () => {
    await exportJsonToExcel(
        'example.xlsx',
        [
            {
                sheetName: 'Hello World',
                data: [
                    ['Foo', 'Bar', 'Baz'],
                    ['A large string here but with\none line break', 'Hi', 'Test'],
                    [
                        '\'starting single quote\nis rendered normally',
                        'Lots\nof\nline\nbreaks',
                        'Auto-fits cells with a little extra margin'
                    ],
                    ['Nice!', '', 'Quick and to the point!']
                ],
                formatAsTable: true
            }
        ],
        {
            overwrite: true // Only for Node.js usage
        }
    );
}