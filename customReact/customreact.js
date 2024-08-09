function injectReactElement(reactElement,container){
    const createHTMLElement=document.createElement(reactElement.type);
    createHTMLElement.innerHTML=reactElement.children;
    for(const prop in reactElement.props){
        createHTMLElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(createHTMLElement);
}


const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click here to Open google.com',
}



const container=document.querySelector('#root');

injectReactElement(reactElement,container);