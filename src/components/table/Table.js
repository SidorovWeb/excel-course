import { ExcelComponent } from '@core/ExcelComponent';
import { createTable } from './table.template.js';
import { resizeHandler } from './table.resize.js';
import { shouldResize } from './table.functions.js';

export class Table extends ExcelComponent {
    static className = 'excel__table';

    constructor($root) {
        super($root, {
            listeners: ['mousedown'],
        });
    }

    toHTML() {
        return createTable(20);
    }

    onMousedown(event) {
        if (shouldResize(event)) {
            resizeHandler(this.$root, event);
        }
    }
}
