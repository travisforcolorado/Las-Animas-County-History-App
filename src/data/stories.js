import { simpsonData } from './simpsonData.js';
import { ranchingData } from './ranchingData.js';
import { pinonData } from './pinonData.js';
import { ludlowData } from './ludlowData.js';
import { batMastersonData } from './batMastersonData.js';
import { dropCityData } from './dropCityData.js';
import { campTrinidadData } from './campTrinidadData.js';
import { prohibitionData } from './prohibitionData.js';
import { santaFeTrailData } from './santaFeTrailData.js';
import { walsenburgData } from './walsenburgData.js';

const historicBusinessSections = [
    {
        heading: 'Trail Commerce and Early Trade',
        content: "Trinidad grew along the Santa Fe Trail, a major commercial route opened in 1821 that linked Missouri with Santa Fe.[1][2] The town was founded in 1862 soon after coal was discovered in the region, and its location near Raton Pass made it a natural stop for travelers, traders, and supply wagons.[2] Early businesses served the needs of trail commerce, providing lodging, blacksmithing, and provisions for the steady movement of people and goods.[1][2]",
        image: "/assets/images/historic_downtown_trinidad.png"
    },
    {
        heading: 'Railroad Boom and Downtown Growth',
        content: "The Atchison, Topeka and Santa Fe Railway reached Trinidad in 1878, making it easier to ship goods and accelerating downtown growth.[2] By the early twentieth century, the city was investing in major civic and commercial buildings, including a library, city hall, an opera house, and a hotel in the downtown core.[2] These projects reflected a business district that had matured from a trail outpost into a regional commercial hub tied to coal mining and rail traffic.[2]"
    },
    {
        heading: 'Newspapers and Civic Life',
        content: "By 1900, Trinidad supported two English-language newspapers and one Spanish-language paper, evidence of a diverse and active civic economy.[2] The Trinidad Chronicle-News, founded in 1876 and created by a merger in 1898, remains the city's long-running daily newspaper and an anchor of local business life.[3] Newspapers did more than report events; they connected communities, advertised local enterprises, and recorded the public story of southern Colorado.[2][3]"
    },
    {
        heading: 'Reinvention in the Modern Era',
        content: "Trinidad's business landscape has continued to change. In the 2010s, the city experienced a new boom tied to the marijuana industry, with significant tax revenue generated from sales.[2] This modern shift shows how the downtown economy has repeatedly adapted to new markets, from trail commerce to rail-and-coal to contemporary tourism and retail.[2] The historic business story is therefore less about a single enterprise and more about a tradition of reinvention shaped by geography and opportunity.[2]"
    },
    {
        heading: 'Sources',
        content: "1. https://en.wikipedia.org/wiki/Santa_Fe_Trail<br>2. https://en.wikipedia.org/wiki/Trinidad,_Colorado<br>3. https://en.wikipedia.org/wiki/Trinidad_Chronicle-News"
    }
];

export const stories = [
    {
        id: 'george-simpson',
        title: simpsonData.title,
        subtitle: simpsonData.subtitle,
        intro: simpsonData.intro,
        image: '/assets/images/simpson_hideout.png',
        excerpt: 'A landmark butte overlooking Trinidad and the burial place of explorer and trader George S. Simpson.',
        imageCredit: 'Historical Illustration / AI Generated',
        link: '#story/george-simpson',
        sections: simpsonData.sections
    },
    {
        id: 'bat-masterson',
        title: batMastersonData.title,
        subtitle: batMastersonData.subtitle,
        intro: batMastersonData.intro,
        image: '/assets/images/bat_masterson.png',
        excerpt: 'Bat Masterson was appointed city marshal of Trinidad in 1882 during the town\'s railroad and coal boom.',
        imageCredit: 'Public Domain / Wikimedia Commons',
        link: '#story/bat-masterson',
        sections: batMastersonData.sections
    },
    {
        id: 'drop-city',
        title: dropCityData.title,
        subtitle: dropCityData.subtitle,
        intro: dropCityData.intro,
        image: '/assets/images/drop_city.png',
        excerpt: 'Founded in 1960 near Trinidad, Drop City became the first rural hippie commune in the United States.',
        imageCredit: 'Historical Recreation / AI Generated',
        link: '#story/drop-city',
        sections: dropCityData.sections
    },
    {
        id: 'ranching-heritage',
        title: ranchingData.title,
        subtitle: ranchingData.subtitle,
        intro: ranchingData.intro,
        image: '/assets/images/ranching_heritage.png',
        excerpt: 'Ranching in Las Animas County reflects the broader history of open range, homesteading, and federal grazing policy.',
        imageCredit: 'Historical Collage / AI Generated',
        link: '#story/ranching-heritage',
        sections: ranchingData.sections
    },
    {
        id: 'pinon-canyon',
        title: pinonData.title,
        subtitle: pinonData.subtitle,
        intro: pinonData.intro,
        image: '/assets/images/pinon_canyon.png',
        excerpt: 'The Pinon Canyon Maneuver Site was created in 1983, and a proposed expansion was cancelled in 2013 after local opposition.',
        imageCredit: 'Vintage Landscape / AI Generated',
        link: '#story/pinon-canyon',
        sections: pinonData.sections
    },
    {
        id: 'walsenburg-massacre',
        title: walsenburgData.title,
        subtitle: walsenburgData.subtitle,
        intro: walsenburgData.intro,
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Miners_Walsenburg_Colorado.jpg',
        excerpt: 'Walsenburg was a key location in the 1913-1914 Colorado Coalfield War, including the Battle of Walsenburg.',
        imageCredit: 'Public Domain / Wikimedia Commons',
        link: '#story/walsenburg-massacre',
        sections: walsenburgData.sections
    },
    {
        id: 'ludlow',
        title: ludlowData.title,
        subtitle: ludlowData.subtitle,
        intro: ludlowData.intro,
        image: '/assets/images/ludlow_tents.png',
        excerpt: 'The 1914 Ludlow Massacre remains a watershed moment in American labor history, where striking miners and their families faced tragedy in their fight for dignity.',
        imageCredit: 'Historical Recreation / AI Generated',
        link: '#story/ludlow',
        sections: ludlowData.sections
    },
    {
        id: 'camp-trinidad',
        title: campTrinidadData.title,
        subtitle: campTrinidadData.subtitle,
        intro: campTrinidadData.intro,
        image: '/assets/images/camp_trinidad.png',
        excerpt: 'Camp Trinidad was a World War II POW camp in Las Animas County, linked to the region\'s coal-mining landscape.',
        imageCredit: 'Historical Recreation / AI Generated',
        link: '#story/camp-trinidad',
        sections: campTrinidadData.sections
    },
    {
        id: 'prohibition-agents',
        title: prohibitionData.title,
        subtitle: prohibitionData.subtitle,
        intro: prohibitionData.intro,
        image: '/assets/images/prohibition_agents.png',
        excerpt: 'Colorado entered Prohibition in 1916, enforced it through state agents, and voted to repeal in 1932.',
        imageCredit: 'Historical Recreation / AI Generated',
        link: '#story/prohibition-agents',
        sections: prohibitionData.sections
    },
    {
        id: 'historic-businesses',
        title: "Historic Businesses of Trinidad",
        subtitle: "Commerce from Trail Era to Modern Revival",
        intro: "Trinidad's business history grew from Santa Fe Trail commerce, accelerated with railroads and coal, and continues to reinvent itself in the modern era.",
        excerpt: "A timeline of Trinidad's business life, from trail-era commerce to rail-and-coal growth and modern reinvention.",
        image: "/assets/images/historic_downtown_trinidad.png",
        link: "#story/historic-businesses",
        sections: historicBusinessSections
    },
    {
        id: 'santa-fe-trail',
        title: santaFeTrailData.title,
        subtitle: santaFeTrailData.subtitle,
        intro: santaFeTrailData.intro,
        image: '/assets/images/santa_fe_trail_wagon.png',
        excerpt: 'Trinidad was a vital stop on the Mountain Branch of the Santa Fe Trail, welcoming weary travelers before the Raton Pass.',
        imageCredit: 'Public Domain',
        link: '#story/santa-fe-trail',
        sections: santaFeTrailData.sections
    }
];
