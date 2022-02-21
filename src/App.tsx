import React from "react";

function App() {
    const [item, setItem] = React.useState('')
    const [list, setList] = React.useState(['Wendley', 'Karol', 'Wyslayne', 'Wylyane'])
    const add = () => {
        setTimeout(() => {
            setList(state => [...state, item])
        }, 500)
    }

    const remove = (item: string) => {
        setTimeout(() => {
            setList(state => state.filter(i => i !== item))
        }, 500)
    }

    return (
        <div>
            <div>
                <input type="text" value={item} onChange={e => setItem(e.target.value)}/>
                <button onClick={add}>Add</button>
            </div>
            <>
                <ul>
                    {list.map((l: string, i: number) => <li key={i}>
                        {l}
                        <button onClick={() => remove(l)}>Remove</button>
                    </li>)}
                </ul>
            </>
            <h1>Hello Word</h1>
        </div>
    )
}

export default App
