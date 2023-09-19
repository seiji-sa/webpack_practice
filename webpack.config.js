const path = require('path');


module.exports = {
    entry: './src/index.js',
    output:{
        path:path.resolve(_dirname, './dist'),
        filename: 'main.js'
    },

    module:{
        rules:[
            {
                test:/\.css/,
                use:[
                {
                    loader:'style-loader',
                },
                    {
                    loader:'css-loader'
                }
                ]
            }
        ]
    }

}
