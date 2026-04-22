import {Commander} from 'commander'

const cache = new Command()

cache
    .command('proxy')
    .options('-p, --port <port>', 'Server Port on which the caching proxy server will run')
    .options('-o, --origin <origin>', 'Origin URL which the requests will be forwarded')
    .action((options) => {
        
    })