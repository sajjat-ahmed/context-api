import React from 'react';
import { useContext } from 'react';
import { CatagoryContext } from '../../App';

const Home = (props) => {
    const [count, setCount] = useContext(CatagoryContext);
    return (
        <div>
            <h1>This is home {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <svg width="1000" height="1000" viewBox="0 0 235 199" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.5 105.5H0L3.5 147.5C21 162.333 56.3 192.4 57.5 194C58.7 195.6 119 198 149 199L221 167C215.167 148.333 201.5 112.9 193.5 120.5C183.5 130 123 169.5 123 131C123 100.2 60 101.167 28.5 105.5Z" fill="url(#paint0_linear)"/>
<path d="M35.5 91.2279H7L10.5 133.228C28 148.061 63.3 178.128 64.5 179.728C65.7 181.328 126 183.728 156 184.728L228 152.728C222.167 134.061 208.5 98.6279 200.5 106.228C190.5 115.728 130 155.228 130 116.728C130 85.9279 67 86.8946 35.5 91.2279Z" fill="url(#paint1_linear)"/>
<path d="M42.5 76.9559H14L17.5 118.956C35 133.789 70.3 163.856 71.5 165.456C72.7 167.056 133 169.456 163 170.456L235 138.456C229.167 119.789 215.5 84.3558 207.5 91.9558C197.5 101.456 137 140.956 137 102.456C137 71.6559 74 72.6225 42.5 76.9559Z" fill="url(#paint2_linear)"/>
<path d="M198 89C198 135.965 160.147 174 113.5 174C66.8532 174 29 135.965 29 89C29 42.0345 66.8532 4 113.5 4C160.147 4 198 42.0345 198 89Z" stroke="url(#paint3_linear)" stroke-width="8"/>
<defs>
<linearGradient id="paint0_linear" x1="110.5" y1="103.272" x2="110.5" y2="199" gradientUnits="userSpaceOnUse">
<stop stop-color="#10B0DC"/>
<stop offset="1" stop-color="#FBACAC" stop-opacity="0"/>
<stop offset="1" stop-color="#4900FF"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="117.5" y1="89" x2="117.5" y2="184.728" gradientUnits="userSpaceOnUse">
<stop stop-color="#FA02FF"/>
<stop offset="1" stop-color="#FBACAC" stop-opacity="0"/>
<stop offset="1" stop-color="#4900FF"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="124.5" y1="74.7279" x2="124.5" y2="170.456" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFE600"/>
<stop offset="1" stop-color="#FBACAC" stop-opacity="0"/>
<stop offset="1" stop-color="#4900FF"/>
</linearGradient>
<linearGradient id="paint3_linear" x1="113.5" y1="0" x2="113.5" y2="178" gradientUnits="userSpaceOnUse">
<stop stop-color="#00D1FF"/>
<stop offset="1" stop-color="#6100FF"/>
</linearGradient>
</defs>
</svg>

        </div>
    );
};

export default Home;