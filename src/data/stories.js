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

export const stories = [
    {
        id: 'george-simpson',
        title: simpsonData.title,
        subtitle: simpsonData.subtitle,
        intro: simpsonData.intro,
        image: '/assets/images/simpson_hideout.png',
        excerpt: 'The legendary scout who survived a siege by Ute warriors on the rocky butte that now bears his name. His grave overlooks Trinidad to this day.',
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
        excerpt: 'The famous lawman served as Marshal in Trinidad during the 1880s, keeping the peace in a rough frontier town.',
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
        excerpt: 'Founded in 1965, Drop City was an artists community that became the first rural hippie commune in the United States.',
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
        excerpt: 'From the early Hispano settlers of the Purgatoire Valley to the Anglo cattle kings and immigrant farmers, agriculture is the backbone of Las Animas County.',
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
        excerpt: 'When the Army proposed a massive expansion of the Pinon Canyon Maneuver Site, the community united under the banner "Not 1 More Acre" and won a historic victory.',
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
        excerpt: 'The "Walsenburg Massacre" in Huerfano County saw the death of Italian miners by vigilantes. This injustice fueled the labor movement that would eventually explode in the Southern Colorado Coalfield Wars.',
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
        excerpt: 'In 1943, Camp Trinidad housed German POWs. Three Japanese-American sisters from the nearby Amache internment camp, while working on a local farm, helped two German officers escape in a plot that stunned the nation.',
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
        excerpt: 'In 1930, the bootlegging wars claimed the lives of federal agents. Dale Kearney was murdered in Aguilar, and Ray Sutton disappeared without a trace near Raton, NM, while working the Trinidad beat.',
        imageCredit: 'Historical Recreation / AI Generated',
        link: '#story/prohibition-agents',
        sections: prohibitionData.sections
    },
    {
        id: 'historic-businesses',
        title: "Historic Businesses of Trinidad",
        description: "Explore the enduring legacy of the businesses that built Trinidad. From 1870s newspapers to the saloons of the Wild West, discover the 12 establishments that have stood the test of time.",
        image: "/assets/images/historic_downtown_trinidad.png",
        link: "#businesses",
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
