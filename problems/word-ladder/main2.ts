function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    const wordSet = new Set(wordList);

    if (!wordSet.has(endWord)) {
        return 0;
    }

    const queue: [string, number][] = [[beginWord, 1]];
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    while (queue.length > 0) {
        const [currentWord, level] = queue.shift()!;

        for (let i = 0; i < currentWord.length; i++) {
            for (const char of alphabet) {
                const nextWord = currentWord.slice(0, i) + char + currentWord.slice(i + 1);

                if (nextWord === endWord) {
                    return level + 1;
                }

                if (wordSet.has(nextWord)) {
                    wordSet.delete(nextWord);
                    queue.push([nextWord, level + 1]);
                }
            }
        }
    }

    return 0;
}
