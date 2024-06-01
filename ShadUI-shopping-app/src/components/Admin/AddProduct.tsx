import { Dispatch, SetStateAction, useEffect, useReducer } from 'react'
import { Button } from '../ui/button'
import axiosHttp from '../../axiosHandler/axiosHandler'

interface AddProductProps{
    closeSheet : Dispatch<SetStateAction<boolean>>;
}

const initialState = {
    Title: '',
    Description: '',
    Price: 0,
    Image: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
    Category: 'mens'
}

function reducer(state: any, action: any) {
    switch (action.type) {
        case 'name': {
            return {
                ...state,
                Title: action.name,
            }
        }
        case 'description': {
            return {
                ...state,
                Description: action.description
            }
        }
        case 'price': {
            return {
                ...state,
                Price: action.price
            }
        }
    }
}

const AddProduct:React.FC<AddProductProps> = ({closeSheet}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    function updateTitle(event: any) {
        dispatch({
            type: 'name',
            name: event.target.value
        })
    }

    function updateDescription(event: any) {
        dispatch({
            type: 'description',
            description: event.target.value
        })
    }

    function updatePrice(event: any) {
        dispatch({
            type: 'price',
            price: event.target.value
        })
    }

    useEffect(() => {
        console.log(state)
    })

    function saveProduct() {
        axiosHttp.post('/products/add', {
            title : state.Title,
            description : state.Description,
            price : Number(state.Price),
            category : state.Category,
            image : state.Image
        }).then(() => {
            closeSheet(false)
        })
    }

    return (
        <div className="w-full max-w-md p-6 bg-white space-y-4">
            <h1 className="text-2xl font-bold mb-4 dark:text-white">Add New Product</h1>
            <div>
                <label className="block mb-1" htmlFor="name">
                    Product Name
                </label>
                <input
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    id="name"
                    placeholder="Enter product name"
                    type="text"
                    value={state.Title}
                    onChange={updateTitle}
                />
            </div>
            <div>
                <label className="block mb-1" htmlFor="description">
                    Description
                </label>
                <textarea
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    id="description"
                    placeholder="Enter product description"
                    rows={3}
                    value={state.Description}
                    onInput={updateDescription}
                />
            </div>
            <div>
                <label className="block mb-1" htmlFor="price">
                    Price
                </label>
                <input
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    id="price"
                    placeholder="Enter product price"
                    type="number"
                    value={state.Price}
                    onInput={updatePrice}
                />
            </div>
            <div>
                <label className="block mb-1" htmlFor="image">
                    Image
                </label>
                <div className="flex items-center justify-center w-full">
                    <label
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:hover:border-blue-500 dark:hover:bg-gray-800"
                        htmlFor="image"
                    >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <UploadIcon className="w-10 h-10 text-gray-400 dark:text-gray-500" />
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-semibold">Click to upload</span>
                                or drag and drop{"\n                                "}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input className="hidden" id="image" type="file" />
                    </label>
                </div>
            </div>
            <Button className="w-full" onClick={saveProduct}>
                Add Product
            </Button>
        </div>
    )
}

export default AddProduct

function UploadIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" x2="12" y1="3" y2="15" />
        </svg>
    )
}
