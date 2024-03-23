function findContentChildren(g: number[], s: number[]): number {
    s.sort((a, b) => a - b);
    g.sort((a, b) => a - b);

    let contentChild = 0;
    let cookieIndex = 0;
    while (contentChild < g.length && cookieIndex < s.length) {
        if (s[cookieIndex] >= g[contentChild]) {
            contentChild++;
        }

        cookieIndex++;
    }

    return contentChild;
};

const g = [10,9,8,7]
const s = [5,6,7,8]

console.log(findContentChildren(g, s))
