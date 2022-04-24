import React from 'react';
import './ExpenseForm.css'

class ExpenseForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         item: {}
      }
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleAmountChange = this.handleAmountChange.bind(this);
      this.handleDateChange = this.handleDateChange.bind(this);
      this.handleCategoryChange = this.handleCategoryChange.bind(this);
   }
   handleNameChange(e) {
      this.setState( (state, props) => {
         let item = state.item
         item.name = e.target.value;
         return { item: item }
      });
   }
   handleAmountChange(e) {
      this.setState( (state, props) => {
         let item = state.item
         item.amount = e.target.value;
         return { item: item }
      });
   }
   handleDateChange(e) {
      this.setState( (state, props) => {
         let item = state.item
         item.date = e.target.value;
         return { item: item }
      });
   }
   handleCategoryChange(e) {
      this.setState( (state, props) => {
         let item = state.item
         item.category = e.target.value;
         return { item: item }
      });
   }
   onSubmit = (e) => {
      e.preventDefault();
      alert(JSON.stringify(this.state.item));
   }
   render() {
      return (
         <div id="expenseForm">
           <form onSubmit={(e) => this.onSubmit(e)}>
            <label for="name">Title</label>
            <input type="text" id="name" name="name" placeholder="Enter expense title" 
               value={this.state.item.name}
               onChange={this.handleNameChange} />

            <label for="amount">Amount</label>
            <input type="number" id="amount" name="amount" placeholder="Enter expense amount"
               value={this.state.item.amount}
               onChange={this.handleAmountChange} />

            <label for="date">Spend Date</label>
            <input type="date" id="date" name="date" placeholder="Enter date" 
               value={this.state.item.date}
               onChange={this.handleDateChange} />

            <label for="category">Category</label>
            <select id="category" name="category"
               value={this.state.item.category}
               onChange={this.handleCategoryChange} >
              <option value="">Select</option>
              <option value="Food">Food</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Academic">Academic</option>
            </select>
           
            <input type="submit" value="Submit" />
           </form>
         </div>
      )
   }
}
export default ExpenseForm;