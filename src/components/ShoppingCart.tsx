import React from 'react'
import style from './ShoppingCart.module.css'
import { FiShoppingCart } from 'react-icons/fi'

interface IShoppingCartProps {}
interface State {
  isOpen: boolean
}
class ShoppingCart extends React.Component<IShoppingCartProps, State> {
  constructor(props: IShoppingCartProps) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <div className={style.cartContainer}>
        <button className={style.button} onClick={this.handleClick}>
          <FiShoppingCart />
          <span>購物車2(件)</span>
        </button>
        <div
          className={style.cartDropDown}
          style={{ display: this.state.isOpen ? 'block' : 'none' }}
        >
          <ul>
            <li>robot 1</li>
            <li>robot 2</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ShoppingCart
