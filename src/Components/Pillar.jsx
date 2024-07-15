import '../../public/pillar.css'

export default function Pillar({placement}) {
    console.log(placement)
    return <>
        <div className='pillar' id={`pillar-${placement}`}>
        </div>
    </>
}