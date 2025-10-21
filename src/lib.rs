use wasm_bindgen::prelude::*;

// This tells Rust to expose the function to JavaScript
#[wasm_bindgen]
pub fn brighten_pixel(value: u8) -> u8 {
    (value.saturating_add(40)).min(255)
}