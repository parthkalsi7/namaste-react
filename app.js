const parent = React.createElement("div",{"id":"parent"},[

    React.createElement("div",{"id":"child1"},[

        React.createElement("h1",{"id":"heading1"},"H1 Tag it is"),
        React.createElement("h1",{"id":"heading2"},"Second H1 Tag it is")

    ]),
    React.createElement("div",{"id":"child2"},[
        
        React.createElement("h1",{"id":"heading3"},"Third H1 Tag it is"),
        React.createElement("h1",{"id":"heading4"},"Fourth H1 Tag it is")
    
    ])
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent);