function CustomerList(props) {

    console.log(props.total);

    const customers = props.allCustomers
    const customerItems = customers.map((customer,index) => {
        return <li key={ index }>{customer}</li>
    })

    console.log(customerItems);

    return (
        <div>
            <h1>Customer list </h1>
            {customerItems}
        </div>
        
    )
}

export default CustomerList