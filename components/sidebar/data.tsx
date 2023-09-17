import { Play, Chart, AddUser, Bookmark, Setting, Game } from '@/components/svgs'



const items = [
    {
        icon: <Play className="text-xl" />,
        title: 'Learning',
        isNew: true
    },
    {
        icon: <Chart className="text-xl" />,
        title: 'Stats',
        isNew: false
    },
    {
        icon: <AddUser className="text-xl" />,
        title: 'Find colleagues',
        isNew: false
    },
    {
        icon: <Bookmark className="text-xl" />,
        title: 'Bookmarks',
        isNew: true
    },
    {
        icon: <Game className="text-xl" />,
        title: 'Gaming',
        isNew: false
    },
    {
        icon: <Setting className="text-xl" />,
        title: 'Settings',
        isNew: false
    }
]

export default items
