
function Message()
{
    //jsx helps to create dynamic content
    //JS expression is something which returns a value.
    const name = '';
    if(name)
        return(<h1>Hello {name}!!</h1>)
    else
        return(<h1>Hello world!!</h1>)
}

export default Message;