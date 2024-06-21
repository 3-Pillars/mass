import '../../public/pillar.css'

export default function Pillar({placement}) {
    console.log(placement)
    return <>
        <div className={`pillar pillar-${placement}`}>
        </div>
    </>
}