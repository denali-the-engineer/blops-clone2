"use client";

import { useState, useEffect } from "react";

export default function ScrollingNumber({ 
  currentValue = 0, 
  updateValue = null, 
  fontSize = "75px", 
  separationWidth = "40px", 
  textColor = "white", 
  afterText = "", 
  beforeText = "",
  dividerWidth = "15px"
}) {
  const [value, setValue] = useState(currentValue || 0);
  
  // Handle prop updates
  useEffect(() => {
    if (updateValue !== null && updateValue !== value) {
      setValue(updateValue);
    }
  }, [updateValue]);

  // Format number with commas and decimals, convert to array of characters
  const getFormattedDigits = (number) => {
    const formatted = number.toLocaleString('en-US', {
      minimumFractionDigits: 3,
      maximumFractionDigits: 3
    });
    return formatted.split('');
  };

  // Create the stack of numbers that will animate for a single digit
  const stratifyDigit = (currentDigit) => {
    let elements = [];
    
    for (let i = 0; i <= 9; i++) {
      elements.push(
        <div 
          key={i} 
          style={{
            position: "absolute",
            top: "0", // Ensure digits start from the top of the container
            transform: `translateY(${(i - currentDigit) * 100}%)`,
            transition: "transform 1s ease-in-out",
            opacity: 1,
            fontWeight: 300,
            fontSize: fontSize,
            lineHeight: fontSize, // Make height equal to fontSize
            width: "100%", // Ensure digits take full width of container
            textAlign: "center" // Center the digit horizontally
          }}
        >
          {i}
        </div>
      );
    }
    
    return elements;
  };

  // Get array of characters for the current value
  const formattedChars = getFormattedDigits(value);

  // Consistent text styling
  const textStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: textColor,
    fontSize: fontSize,
    fontWeight: 300,
    height: fontSize,
    marginRight: "10px",
    marginLeft: "10px"
  };

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        marginBottom: "50px"
      }}>
        {/* Optional text before the number */}
        {beforeText && (
          <div style={textStyle}>
            {beforeText}
          </div>
        )}

        <div style={{ display: "flex", alignItems: "center" }}>
          {/* Add dollar sign before the numbers */}
          <div 
            style={{ 
              height: fontSize,
              width: separationWidth,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: textColor,
              fontSize: fontSize,
              fontWeight: 300,
              marginRight: "5px"
            }}
          >
            $
          </div>

          {/* Render each character (digit, comma, or decimal point) */}
          {formattedChars.map((char, index) => {
            if (char === ',' || char === '.') {
              return (
                <div 
                  key={`separator-${index}`} 
                  style={{ 
                    height: fontSize,
                    width: dividerWidth,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: textColor,
                    fontSize: fontSize,
                    fontWeight: 300,
                  }}
                >
                  {char}
                </div>
              );
            } else {
              const digit = parseInt(char, 10);
              return (
                <div 
                  key={`digit-${index}`} 
                  style={{ 
                    position: "relative", 
                    height: fontSize, 
                    width: separationWidth, 
                    overflow: "hidden",
                    margin: "0",
                    backgroundColor: "transparent",
                    borderRadius: "4px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: textColor,
                  }}
                >
                  {stratifyDigit(digit)}
                </div>
              );
            }
          })}
        </div>

        {/* Optional text after the number */}
        {afterText && (
          <div style={textStyle}>
            {afterText}
          </div>
        )}
      </div>
    </div>
  );
}