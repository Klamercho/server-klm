const { News } = require('../models');
const config = require('../config')

module.exports = {
    get: {
        all(req, res, next) {
            console.log(req.body);
            News
                .find({})
                .lean()
                .then((news) => {
                    res.send(news);
                })
                .catch((e) => console.log(e));
        },
        initiate(req, res, next) {
            News.insertMany([
                {
                    newsTitle: 'KLM is on the market! Buy shares now! ',
                    newsPictureUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmelmagazine.com%2Fwp-content%2Fuploads%2F2019%2F07%2FScreen-Shot-2019-07-31-at-5.47.12-PM.png&f=1&nofb=1',
                    newsDescription: 'KLM has officially launched its operations. Investors say it will be a big hit within the BPO industry. Share price is still unknown but experts say it will surpass that of Facebook very soon.',
                    newsMainText: 'Will be added'
                },
                {
                    newsTitle: 'KLM is almost finished ',
                    newsPictureUrl: 'https://images.pexels.com/photos/936575/pexels-photo-936575.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    newsDescription: 'KLM business is to have a brand new website by the end of the year. No one believed this would happen, but the dream is coming closer to reality.',
                    newsMainText: 'Will be added'
                },
                {
                    newsTitle: 'KLM is announced. Business world is excited',
                    newsPictureUrl: 'https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    newsDescription: 'A new company will revolutionize the world of business and BPO services. It is located in Sofia and is expected to launch later this year. Rival business are warry.',
                    newsMainText: 'Will be added'
                },
                {
                    newsTitle: 'A new company is expected to emerge on the global markets',
                    newsPictureUrl: 'https://images.pexels.com/photos/315918/pexels-photo-315918.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    newsDescription: 'A new business is to be initiated soon. Not many details are yet known except that it would change the world. Some people are skeptic...',
                    newsMainText: 'Will be added'
                }



            ]).then(() => {
                console.log("initial log successful!");
                res.send("All records imported!")
            })
        }
    },

    post: {}
}
