class Dir {
    constructor() {
        this.dirs = {};
        this.files = {};
    }
}

var FileSystem = function() {
    this.root = new Dir();
    
    // Helper function that is called by both file functions
    this._getFileDir = (filePath) => {
        // Skip first '/' character to avoid adding
        // an empty string to the start of the arrray.
        const paths = filePath.substr(1).split('/');
        let len = paths.length - 1;
        let dir = this.root;		
		// Loop from first to last-1
        for (let n = 0; n < len; n++) {
            dir = dir.dirs[paths[n]];
        }
		// Last item is the file name
        return { dir, fileName: paths[len] };
    };
};

/** 
 * @param {string} path
 * @return {string[]}
 */
FileSystem.prototype.ls = function(path) {
    let dir = this.root;
    if (path !== '/') {
        // Loop from first to last-1
        const paths = path.substr(1).split('/');
        for (let n = 0; n < paths.length - 1; n++) {
            dir = dir.dirs[paths[n]];
        }
        // Last item in path can be either file or dir
        const name = paths[paths.length - 1];
        if (dir.files[name] !== undefined) {
            return [name];
        }
        dir = dir.dirs[name];
    }
    const files = Object.keys(dir.dirs).concat(Object.keys(dir.files));
    files.sort();
    return files;
};

/** 
 * @param {string} path
 * @return {void}
 */
FileSystem.prototype.mkdir = function(path) {
    let dir = this.root;
    const paths = path.substr(1).split('/');
    for (const name of paths) {
        if (dir.dirs[name] === undefined) {
            dir.dirs[name] = new Dir();
        }
        dir = dir.dirs[name];
    }
};

/** 
 * @param {string} filePath 
 * @param {string} content
 * @return {void}
 */
FileSystem.prototype.addContentToFile = function(filePath, content) {
    const { dir, fileName } = this._getFileDir(filePath);
    dir.files[fileName] = (dir.files[fileName] || '') + content;
};

/** 
 * @param {string} filePath
 * @return {string}
 */
FileSystem.prototype.readContentFromFile = function(filePath) {
    const { dir, fileName } = this._getFileDir(filePath);
    return dir.files[fileName];
};

/** 
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.ls(path)
 * obj.mkdir(path)
 * obj.addContentToFile(filePath,content)
 * var param_4 = obj.readContentFromFile(filePath)
 */

