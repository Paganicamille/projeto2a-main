export default function Listas() {
    const basquete = ['Lakers', 'warriors', 'chicago', 'pistons', 'thunder', 'new orleans']

    const basqueteObj = [
        {
            id:1,
            baska: 'Lakers'
        },

        {
            id: 2,
            baska: 'warriors'
        },

        {
            id: 3,
            baska: 'chicago'
        },

        {
            id: 4,
            baska: 'pistons'
        },

        {
            id: 5,
            baska: 'thunder'
        },

        {
            id: 6,
            baska: 'new orleans'
        },



    ]

    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1>Listas</h1>
            <p>{basqueteObj[0].baska}</p>
            <h2>Lista comum</h2>
            <ul>
                {basquete.map((baska, i) => (
                   <li key={i}>{i+1} - {baska}</li>
                
                ))}
            </ul>

            <div>
            <h2>Lista de objetos</h2>
                {basqueteObj.map((baskaobj) => (
                    <div key={baskaobj.id}>
                        <h3>{baskaobj.id}</h3>
                        <p>{baskaobj.baska}</p>

                    </div>
                ))}
                </div>
        </div>
    )


}