
import Item from './Item'
import AddUser from './svgs/AddUser'


const items = [
    {
        title: 'Users',
        icon: <AddUser className='w-[30px]' />,
        number: 21457,
        percent: 20,
        isUp: true,
    },     

]

export default function Statistics() {
  return (
    <div className={`bg-white sm:border sm:border-[#DEDEDC] sm:rounded-[24px] px-2 md:px-28 py-16 mt-8 space-y-20`}>

        <div>
            <h3 className='text-center font-semibold text-3xl uppercase'>USERS REGISTRED STATICS</h3>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    </div>
  )
}
