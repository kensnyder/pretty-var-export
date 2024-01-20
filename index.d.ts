export = prettyVarExport;
declare function prettyVarExport(value: any): any;
declare namespace prettyVarExport {
    /**
     * Log given values to stdout with a stacktrace label
     * @param {any[]} args
     */
    export function log(...args: any[]): void;
    export { colors };
    export { handlers };
    export { indent };
    export { labels };
    export { options };
}
import colors = require("./src/colors/colors.js");
import handlers = require("./src/handlers/handlers.js");
import indent = require("./src/indent/indent.js");
import labels = require("./src/labels/labels.js");
import options = require("./src/options/options.js");
//# sourceMappingURL=index.d.ts.map