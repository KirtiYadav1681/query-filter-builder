# Query Filter Builder

## Project Description

This project is a search bar component designed to filter logs by constructing specific queries. It is built using React and Tailwind CSS, providing a dynamic interface for building query filters interactively.

### Key Features

1. **Dynamic Search Bar**: Initially displays an empty search bar.
2. **Attribute Selection**: Clicking on the search bar reveals a dropdown with a predefined list of attributes.
3. **Operation Selection**: After choosing an attribute, the dropdown updates to display relevant operations.
4. **Value Input**: Users can input a value corresponding to the selected attribute and operation, forming a triplet (attribute - operation - value).
5. **Triplet Management**: Multiple triplets can be added sequentially, with options to remove any triplet via a cross icon.

## Technologies Used

- **React**: For building the user interface.
- **Tailwind CSS**: For styling the components.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/KirtiYadav1681/query-filter-builder.git
   ```
2. Navigate to the project directory:
   ```bash
   cd query-filter-builder
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. **Open the Search Bar**: Click on the search bar to see a dropdown list of attributes.
2. **Select an Attribute**: Choose an attribute from the dropdown list.
3. **Choose an Operation**: Once an attribute is selected, the dropdown will display a list of operations.
4. **Input a Value**: Enter a value after selecting an operation and press `Enter` to form a triplet.
5. **Add More Triplets**: Repeat the process to add more query filters.
6. **Delete Triplets**: Click the cross icon next to any triplet to remove it.

## File Structure

- `src/components/SearchBar.js`: Main component for the search bar functionality.
- `src/Data.js`: Contains hardcoded values for attributes and operations.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **React Icons**: For the icons used in the project.
- **Tailwind CSS**: For the styling framework.
