import '../../public/pillar.css'

export default function Pillar({placement, visited}) {
    return <>
        {visited ?
            <div className={`pillar pillar-${placement}-animation`} id={`pillar-${placement}`}></div> :
            <div className={`pillar`} id={`pillar-${placement}`}></div>
        }
    </>
}