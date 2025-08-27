import { useState } from 'react';
import Checkbox from '../../shared/Checkbox';

function SelectableList({ 
  title, 
  items = [], 
  selectedItems = [], 
  onChange, 
  borderColor = '#003D5C', 
  checkboxColor = 'text-blue-500'
}) {
  const [currentItems, setCurrentItems] = useState(selectedItems);

  const handleItemChange = (item) => {
    const updatedItems = currentItems.includes(item)
      ? currentItems.filter(i => i !== item)
      : [...currentItems, item];
    setCurrentItems(updatedItems);
    onChange(updatedItems);
  };

  return (
    <div className="mb-6 w-full max-w-3xl mx-auto p-4">
      <h2 className="font-agdasima text-3xl font-bold text-center mb-4">{title}</h2>
      <ul
        className="font-roboto bg-white rounded-lg p-4 space-y-2"
        style={{
          borderTop: `6px solid ${borderColor}`,
          borderLeft: `6px solid ${borderColor}`,
          borderRight: `6px solid ${borderColor}`,
          borderBottom: `16px solid ${borderColor}`,
        }}
      >
        {items.map((item) => (
          <li key={item} className="mb-2 flex items-center">
            <Checkbox
              value={item}
              checked={currentItems.includes(item)}
              onChange={() => handleItemChange(item)}
              className={checkboxColor}
            >
              {item}
            </Checkbox>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectableList;
