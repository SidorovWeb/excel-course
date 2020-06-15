const CODES = {
    A: 65,
    Z: 90,
};

function createCell(cell) {
    return `
    <div class="cell">
        ${cell}
    </div>`;
}

function toColumn(col) {
    return `
    <div class="column">
        ${col}
    </div>`;
}

function createRow(contet, number = '') {
    return `
        <div class="row">
            <div class="row-info">${number}</div>
            <div class="row-data">${contet}</div>
        </div>`;
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index);
}

export function createTable(rowsCount = 15) {
    const colsCount = CODES.Z - CODES.A + 1;
    const rows = [];

    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(toColumn)
        .join('');

    rows.push(createRow(cols));

    for (let i = 0; i < rowsCount; i++) {
        const cells = new Array(colsCount).fill('').map(createCell).join('');
        rows.push(createRow(cells, i + 1));
    }

    return rows.join('');
}
