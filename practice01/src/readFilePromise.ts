import {readFile} from 'fs'

// readFile('package.json', (err: Error, result: Buffer) => {
//     if (err) throw err
//     else {
//         console.log(result.toString())
//     }
// })

let readFilePromise = (filename: string): Promise<string> => {
    return new Promise<string>((resolve: (content: string) => void, reject: (err: Error) => void) => {
        readFile(filename, (err: Error, buffer: Buffer) => {
            if (err)
                reject(err)
            else
                resolve(buffer.toString())
        })
    })
}

// readFilePromise('package.json')
// .then((packageJson: string): Promise<string> => {
//     console.log(`<package.json>: ${packageJson}`)
//     return readFilePromise('tsconfig.json')
// }).then((tsconfigJson: string): void => {
//     console.log(`<tsconfig.json>: ${tsconfigJson}`)
// }).catch((err: Error): void => {
//     console.error(err)
// }).finally((): void => {
//     console.log('completed')
// })

// Promise.all(['package.json', 'tsconfig.json'].map((filename: string): Promise<string> => readFilePromise(filename)))
// .then(([packageJson, tsconfigJson]: string[]): void => {
//     console.log(`<package.json>: ${packageJson}`)
//     console.log(`<tsconfig.json>: ${tsconfigJson}`)
// }, (err: Error): void => {
//     console.error(err)
// }).finally((): void => {
//     console.log('complete')
// })

// (async () => {
//     try {
//         let [packageJson, tsconfigJson]: string[] = await Promise.all(['package.json', 'tsconfig.json'].map((filename: string): Promise<string> => readFilePromise(filename)))
//         console.log(`<package.json>: ${packageJson}`)
//         console.log(`<tsconfig.json>: ${tsconfigJson}`)
//     } catch (err) {
//         console.error(err)
//     } finally {
//         console.log('complete...')
//     }
// })()

(async () => {
    try {
        let packageJson: string = await readFilePromise('package.json')
        console.log(`<package.json>: ${packageJson}`)
        let tsconfigJson: string = await readFilePromise('tsconfig.json')
        console.log(`<tsconfig.json>: ${tsconfigJson}`)
    } catch (err) {
        console.error(err)
    } finally {
        console.log('complete......')
    }
})()
