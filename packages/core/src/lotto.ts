
main();

function main() {
    // console.info('starting');
    // console.info(getNewResult());
}

export function getNewResult(): number[] {
    return Array.from({ length: 6 }, () => getRandomInt(10));
}

function getRandomInt(max): number {
    return Math.floor(Math.random() * Math.floor(max));
}
