class DisjointSet {
    constructor(size) {
      this.root = Array(size).fill().map((_, i) => i);
      this.rank = Array(size).fill().map((_) => 1);
    }
  
    find(x) {
      if (x === this.root[x]) return x;
      this.root[x] = this.find(this.root[x]);
      return this.root[x];  
    }
  
    union(x, y) {
      const rootX = this.find(x);
      const rootY = this.find(y);
      if (rootX !== rootY) {
        if (this.rank[rootX] > this.rank[rootY]) {
          this.root[rootY] = rootX;
        } else if (this.rank[rootX] < this.rank[rootY]) {
          this.root[rootX] = rootY;     
        } else {
          this.root[rootY] = rootX;
          this.rank[rootX]++;
        }
      }
    }
}
