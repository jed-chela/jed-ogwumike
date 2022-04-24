import React from 'react';
import './ExpenseEntryItemList.css'

class ExpenseEntryItemList extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         isLoaded: false,
         items: []
      }
   }

   setItems(remoteItems) {
      var items = [];
      remoteItems.forEach((item) => {
         let newItem = {
            id: item._id,
            name: item.name,
            amount: item.amount,
            spendDate: item.spend_date,
            category: item.category
         }
         items.push(newItem)
      });
      this.setState({
         isLoaded: true,
         items: items
      });
   }
   fetchRemoteItems() {
      fetch("http://localhost:8000/api/expenses")
         .then(res => res.json())
         .then(
            (result) => {
               this.setItems(result);
            },
            (error) => {
               this.setState({
                  isLoaded: false,
                  error
               });
            }
         )
   }
   deleteRemoteItem(id) {
      fetch('http://localhost:8000/api/expense/' + id, { method: 'DELETE' })
         .then(res => res.json())
         .then(
            () => {
               this.fetchRemoteItems()
            }
         )
   }
   componentDidMount() { 
      this.fetchRemoteItems(); 
   }
   handleDelete = (id, e) => { 
      e.preventDefault(); 
      console.log(id); 

      this.deleteRemoteItem(id); 
   }
   render() {
      let lists = [];
      if (this.state.isLoaded) {
         lists = this.state.items.map((item) =>
            <tr key={item.id} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
               <td>{item.name}</td>
               <td>{item.amount}</td>
               <td>{new Date(item.spendDate).toDateString()}</td>
               <td>{item.category}</td>
               <td><a href="#" onClick={(e) => this.handleDelete(item.id, e)}>Remove</a></td>
            </tr>
         );
      }
      return (
         <div>
            <table onMouseOver={this.handleMouseOver}>
               <thead>
                  <tr>
                     <th>Item</th>
                     <th>Amount</th>
                     <th>Date</th>
                     <th>Category</th>
                     <th>Remove</th>
                  </tr>
               </thead>
               <tbody>
                  {lists}
               </tbody>
            </table>
         </div>
      );
   }

}
export default ExpenseEntryItemList;