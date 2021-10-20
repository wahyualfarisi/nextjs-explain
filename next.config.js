const { PHASE_DEVELOPMENT_SERVER }  = require('next/constants');

module.exports =  (phase) => {
    if(phase === PHASE_DEVELOPMENT_SERVER){
        return {
            env: {
                mongodb_username: `nextjs`,
                mongodb_password: `indonesiaku123`,
                mongodb_cluster: 'belajarmongodb',
                mongodb_database: 'my-site-dev'
            }
        }
    }


    return {
        env: {
            mongodb_username: `nextjs`,
            mongodb_password: `indonesiaku123`,
            mongodb_cluster: 'belajarmongodb',
            mongodb_database: 'my-site'
        }
    }
}