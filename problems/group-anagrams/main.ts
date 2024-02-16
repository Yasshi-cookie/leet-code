function groupAnagrams(strs: string[]): string[][] {
    let hash = {}

    strs.forEach((str) => {
        let sortedStr = sortStr(str)
        if (sortedStr in hash) {
            // 既にhashに登録されている場合
            hash[sortedStr].push(str)
        } else {
            // 新規の場合
            hash[sortedStr] = [str]
        }
    })

    return Object.values(hash)
};

function sortStr(str: string): string {
    return str.split('').sort().join()
}
