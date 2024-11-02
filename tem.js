/*
let model = {
  laptop: {
    brand: null,
    model: null,
    price: null,
    stock: null,
  },
  processor: {
    brand: null,
    model: null,
    core: null,
  },
  display: {
    size: null,
    type: null,
    resolution: null,
    touchScreen: null,
    features: null,
  },
  memory: {
    ram: null,
    ramType: null,
    removable: null,
  },
  storage: {
    type: null,
    capacity: null,
    upgradeOptions: null,
  },
  graphics: {
    model: null,
    memory: null,
  },
  keyboardAndTouchpad: {
    keyboard: {
      type: null,
      features: null,
    },
    touchpad: null,
  },
  cameraAndAudio: {
    webcam: null,
    speaker: null,
    microphone: null,
    audioFeatures: null,
  },
  portsAndSlots: {
    cardReader: null,
    hdmiPort: null,
    usbTypeC: null,
    headphoneJack: null,
  },
  networkAndConnectivity: {
    wifi: null,
    bluetooth: null,
  },
  security: {
    fingerprintSensor: null,
  },
  operatingSystem: null,
  power: {
    batteryType: null,
    batteryCapacity: null,
    adapterType: null,
  },
  physicalSpecification: {
    color: null,
    dimensions: {
      height: null,
      width: null,
      depth: null,
    },
    weight: null,
  },
  warranty: null,
};
let newModel = {
  laptop: {
    brand: textWash(e.target.Brand.value),
    model: textWash(e.target.laptopModel.value),
    price: textWash(e.target.price.value),
    stock: textWash(e.target.stock.value),
  },
  processor: {
    brand: textWash(e.target.processorBrand.value),
    model: textWash(e.target.processorModel.value),
    core: textWash(e.target.processorCore.value),
  },
  display: {
    size: textWash(e.target.displaySize.value),
    type: textWash(e.target.displayType.value),
    resolution: textWash(e.target.displayResolution.value),
    touchScreen: textWash(e.target.touchScreen.value),
    features: textWash(e.target.displayFeatures.value),
  },
  memory: {
    ram: textWash(e.target.ram.value),
    ramType: textWash(e.target.ramType.value),
    removable: textWash(e.target.removable.value),
  },
  storage: {
    type: textWash(e.target.storageType.value),
    capacity: textWash(e.target.storageCapacity.value),
    upgradeOptions: textWash(e.target.storageUpgrade.value),
  },
  graphics: {
    model: textWash(e.target.graphicsModel.value),
    memory: textWash(e.target.graphicsMemory.value),
  },
  keyboardAndTouchpad: {
    keyboard: {
      type: textWash(e.target.keyboardType.value),
      features: textWash(e.target.keyboardFeatures.value),
    },
    touchpad: textWash(e.target.touchPad.value),
  },
  cameraAndAudio: {
    webcam: textWash(e.target.webcam.value),
    speaker: textWash(e.target.speaker.value),
    microphone: textWash(e.target.microphone.value),
    audioFeatures: textWash(e.target.audioFeatures.value),
  },
  portsAndSlots: {
    cardReader: textWash(e.target.cardReader.value),
    hdmiPort: textWash(e.target.hdmiPort.value),
    usbTypeC: textWash(e.target.usbTypeC.value),
    headphoneJack: textWash(e.target.headphoneJack.value),
  },
  networkAndConnectivity: {
    wifi: textWash(e.target.wifi.value),
    bluetooth: textWash(e.target.bluetooth.value),
  },
  security: {
    fingerprintSensor: textWash(e.target.fingerprintSensor.value),
  },
  operatingSystem: textWash(e.target.operatingSystem.value),
  power: {
    batteryType: textWash(e.target.batteryType.value),
    batteryCapacity: textWash(e.target.batteryCapacity.value),
    adapterType: textWash(e.target.adapterType.value),
  },
  physicalSpecification: {
    color: textWash(e.target.color.value),
    dimensions: {
      height: textWash(e.target.height.value),
      width: textWash(e.target.width.value),
      depth: textWash(e.target.depth.value),
    },
    weight: textWash(e.target.weight.value),
  },
  warranty: textWash(e.target.warrantyDetails.value),
};

// Create an object to store the input values
const formData = {};

// Iterate over the event target, which is the form
const formElements = event.target.elements;

for (let i = 0; i < formElements.length; i++) {
  const input = formElements[i];

  // Ensure it's an input, select, or textarea (ignore buttons)
  if (
    input.tagName === "INPUT" ||
    input.tagName === "TEXTAREA" ||
    input.tagName === "SELECT"
  ) {
    // Use the input's id or name as the key for the form data object
    formData[input.id] = input.value;
  }
}

// Log the form data object (for demonstration purposes)
console.log(Object.keys(formData));

// Here, you can further process the formData object, e.g., send it to an API
*/
const sampleData = [
  {
    laptop: { brand: "Dell", model: "XPS 13", price: "1200", stock: 15 },
    processor: { brand: "Intel", model: "i7-1165G7", core: "Quad-Core" },
    display: {
      size: "13.3 inches",
      type: "LED",
      resolution: "1920x1080",
      touchScreen: false,
      features: "Anti-glare",
    },
    memory: { ram: "16GB", ramType: "DDR4", removable: "Non-Removable" },
    storage: { type: "SSD", capacity: "512GB", upgradeOptions: "Yes" },
    graphics: { model: "Intel Iris Xe", memory: "Integrated" },
    keyboardAndTouchpad: {
      keyboard: { type: "Backlit", features: "RGB Lighting" },
      touchpad: "Precision",
    },
    cameraAndAudio: {
      webcam: "720p",
      speaker: "Stereo",
      microphone: "Array",
      audioFeatures: "Waves MaxxAudio",
    },
    portsAndSlots: {
      cardReader: "No",
      hdmiPort: "No",
      usbTypeC: "2",
      headphoneJack: "Yes",
    },
    networkAndConnectivity: { wifi: "WiFi 6", bluetooth: "5.1" },
    security: { fingerprintSensor: "Yes" },
    operatingSystem: "Windows 10 Pro",
    power: {
      batteryType: "Li-ion",
      batteryCapacity: "52Wh",
      adapterType: "65W",
    },
    physicalSpecification: {
      color: "Silver",
      dimensions: {
        height: "0.58 inches",
        width: "11.6 inches",
        depth: "7.8 inches",
      },
      weight: "1.2 kg",
    },
    warranty: "2 Years",
    publishDate: "2024-10-21T13:39:09.279+00:00",
  },
  {
    laptop: {
      brand: "Apple",
      model: "MacBook Pro 16",
      price: "2500",
      stock: 8,
    },
    processor: { brand: "Apple", model: "M1 Max", core: "10-core" },
    display: {
      size: "16 inches",
      type: "Retina",
      resolution: "3456x2234",
      touchScreen: false,
      features: "True Tone",
    },
    memory: {
      ram: "32GB",
      ramType: "Unified Memory",
      removable: "Non-Removable",
    },
    storage: { type: "SSD", capacity: "1TB", upgradeOptions: "No" },
    graphics: { model: "Apple M1 Max", memory: "Integrated" },
    keyboardAndTouchpad: {
      keyboard: { type: "Magic Keyboard", features: "Backlit" },
      touchpad: "Force Touch",
    },
    cameraAndAudio: {
      webcam: "1080p",
      speaker: "Six-Speaker System",
      microphone: "Three-Mic Array",
      audioFeatures: "Spatial Audio",
    },
    portsAndSlots: {
      cardReader: "SDXC",
      hdmiPort: "Yes",
      usbTypeC: "3",
      headphoneJack: "Yes",
    },
    networkAndConnectivity: { wifi: "WiFi 6", bluetooth: "5.0" },
    security: { fingerprintSensor: "Yes" },
    operatingSystem: "macOS Monterey",
    power: {
      batteryType: "Li-polymer",
      batteryCapacity: "100Wh",
      adapterType: "140W USB-C",
    },
    physicalSpecification: {
      color: "Space Gray",
      dimensions: {
        height: "0.66 inches",
        width: "14.09 inches",
        depth: "9.68 inches",
      },
      weight: "2.1 kg",
    },
    warranty: "1 Year",
    publishDate: "2024-10-21T13:39:09.279+00:00",
  },
  {
    laptop: { brand: "HP", model: "Spectre x360", price: "1400", stock: 20 },
    processor: { brand: "Intel", model: "i7-1165G7", core: "Quad-Core" },
    display: {
      size: "13.5 inches",
      type: "OLED",
      resolution: "3000x2000",
      touchScreen: true,
      features: "Corning Gorilla Glass",
    },
    memory: { ram: "16GB", ramType: "LPDDR4x", removable: "Non-Removable" },
    storage: { type: "SSD", capacity: "512GB", upgradeOptions: "Yes" },
    graphics: { model: "Intel Iris Xe", memory: "Integrated" },
    keyboardAndTouchpad: {
      keyboard: { type: "Backlit", features: "Full-size" },
      touchpad: "Precision",
    },
    cameraAndAudio: {
      webcam: "1080p",
      speaker: "Bang & Olufsen",
      microphone: "Dual Array",
      audioFeatures: "HP Audio Boost",
    },
    portsAndSlots: {
      cardReader: "MicroSD",
      hdmiPort: "No",
      usbTypeC: "2",
      headphoneJack: "Yes",
    },
    networkAndConnectivity: { wifi: "WiFi 6", bluetooth: "5.1" },
    security: { fingerprintSensor: "Yes" },
    operatingSystem: "Windows 11 Home",
    power: {
      batteryType: "Li-ion",
      batteryCapacity: "66Wh",
      adapterType: "65W",
    },
    physicalSpecification: {
      color: "Nightfall Black",
      dimensions: {
        height: "0.67 inches",
        width: "11.75 inches",
        depth: "8.58 inches",
      },
      weight: "1.32 kg",
    },
    warranty: "2 Years",
    publishDate: "2024-10-21T13:39:09.279+00:00",
  },
  {
    laptop: {
      brand: "Lenovo",
      model: "ThinkPad X1 Carbon",
      price: "1800",
      stock: 12,
    },
    processor: { brand: "Intel", model: "i7-1260P", core: "12-core" },
    display: {
      size: "14 inches",
      type: "IPS",
      resolution: "1920x1200",
      touchScreen: false,
      features: "Anti-glare",
    },
    memory: { ram: "16GB", ramType: "LPDDR5", removable: "Non-Removable" },
    storage: { type: "SSD", capacity: "1TB", upgradeOptions: "Yes" },
    graphics: { model: "Intel Iris Xe", memory: "Integrated" },
    keyboardAndTouchpad: {
      keyboard: { type: "Backlit", features: "Spill-Resistant" },
      touchpad: "Precision",
    },
    cameraAndAudio: {
      webcam: "1080p",
      speaker: "Dolby Atmos",
      microphone: "Dual Array",
      audioFeatures: "Dolby Voice",
    },
    portsAndSlots: {
      cardReader: "No",
      hdmiPort: "Yes",
      usbTypeC: "2",
      headphoneJack: "Yes",
    },
    networkAndConnectivity: { wifi: "WiFi 6E", bluetooth: "5.2" },
    security: { fingerprintSensor: "Yes" },
    operatingSystem: "Windows 11 Pro",
    power: {
      batteryType: "Li-polymer",
      batteryCapacity: "57Wh",
      adapterType: "65W",
    },
    physicalSpecification: {
      color: "Black",
      dimensions: {
        height: "0.59 inches",
        width: "12.38 inches",
        depth: "8.54 inches",
      },
      weight: "1.13 kg",
    },
    warranty: "3 Years",
    publishDate: "2024-10-21T13:39:09.279+00:00",
  },
  {
    laptop: {
      brand: "Asus",
      model: "ROG Zephyrus G14",
      price: "2000",
      stock: 10,
    },
    processor: { brand: "AMD", model: "Ryzen 9 5900HS", core: "8-core" },
    display: {
      size: "14 inches",
      type: "IPS",
      resolution: "2560x1440",
      touchScreen: false,
      features: "Pantone Validated",
    },
    memory: { ram: "16GB", ramType: "DDR4", removable: "Non-Removable" },
    storage: { type: "SSD", capacity: "1TB", upgradeOptions: "Yes" },
    graphics: { model: "NVIDIA RTX 3060", memory: "6GB GDDR6" },
    keyboardAndTouchpad: {
      keyboard: { type: "Backlit", features: "RGB Lighting" },
      touchpad: "Precision",
    },
    cameraAndAudio: {
      webcam: "No",
      speaker: "Dolby Atmos",
      microphone: "Dual Array",
      audioFeatures: "AI Noise Cancellation",
    },
    portsAndSlots: {
      cardReader: "No",
      hdmiPort: "Yes",
      usbTypeC: "2",
      headphoneJack: "Yes",
    },
    networkAndConnectivity: { wifi: "WiFi 6", bluetooth: "5.1" },
    security: { fingerprintSensor: "Yes" },
    operatingSystem: "Windows 11 Home",
    power: {
      batteryType: "Li-ion",
      batteryCapacity: "76Wh",
      adapterType: "180W",
    },
    physicalSpecification: {
      color: "Eclipse Gray",
      dimensions: {
        height: "0.70 inches",
        width: "12.76 inches",
        depth: "8.74 inches",
      },
      weight: "1.7 kg",
    },
    warranty: "1 Year",
    publishDate: "2024-10-21T13:39:09.279+00:00",
  },
  {
    laptop: { brand: "Dell", model: "XPS 13", price: "1200", stock: 15 },
    processor: { brand: "Intel", model: "i7-1165G7", core: "Quad-Core" },
    display: {
      size: "13.3 inches",
      type: "LED",
      resolution: "1920x1080",
      touchScreen: false,
      features: "Anti-glare",
    },
    memory: { ram: "16GB", ramType: "DDR4", removable: "Non-Removable" },
    storage: { type: "SSD", capacity: "512GB", upgradeOptions: "Yes" },
    graphics: { model: "Intel Iris Xe", memory: "Integrated" },
    keyboardAndTouchpad: {
      keyboard: { type: "Backlit", features: "RGB Lighting" },
      touchpad: "Precision",
    },
    cameraAndAudio: {
      webcam: "720p",
      speaker: "Stereo",
      microphone: "Array",
      audioFeatures: "Waves MaxxAudio",
    },
    portsAndSlots: {
      cardReader: "No",
      hdmiPort: "No",
      usbTypeC: "2",
      headphoneJack: "Yes",
    },
    networkAndConnectivity: { wifi: "WiFi 6", bluetooth: "5.1" },
    security: { fingerprintSensor: "Yes" },
    operatingSystem: "Windows 10 Pro",
    power: {
      batteryType: "Li-ion",
      batteryCapacity: "52Wh",
      adapterType: "65W",
    },
    physicalSpecification: {
      color: "Silver",
      dimensions: {
        height: "0.58 inches",
        width: "11.6 inches",
        depth: "7.8 inches",
      },
      weight: "1.2 kg",
    },
    warranty: "2 Years",
    publishDate: "2024-10-21T13:39:09.279+00:00",
  },
  {
    laptop: {
      brand: "Apple",
      model: "MacBook Pro 16",
      price: "2500",
      stock: 8,
    },
    processor: { brand: "Apple", model: "M1 Max", core: "10-core" },
    display: {
      size: "16 inches",
      type: "Retina",
      resolution: "3456x2234",
      touchScreen: false,
      features: "True Tone",
    },
    memory: {
      ram: "32GB",
      ramType: "Unified Memory",
      removable: "Non-Removable",
    },
    storage: { type: "SSD", capacity: "1TB", upgradeOptions: "No" },
    graphics: { model: "Apple M1 Max", memory: "Integrated" },
    keyboardAndTouchpad: {
      keyboard: { type: "Magic Keyboard", features: "Backlit" },
      touchpad: "Force Touch",
    },
    cameraAndAudio: {
      webcam: "1080p",
      speaker: "Six-Speaker System",
      microphone: "Three-Mic Array",
      audioFeatures: "Spatial Audio",
    },
    portsAndSlots: {
      cardReader: "SDXC",
      hdmiPort: "Yes",
      usbTypeC: "3",
      headphoneJack: "Yes",
    },
    networkAndConnectivity: { wifi: "WiFi 6", bluetooth: "5.0" },
    security: { fingerprintSensor: "Yes" },
    operatingSystem: "macOS Monterey",
    power: {
      batteryType: "Li-polymer",
      batteryCapacity: "100Wh",
      adapterType: "140W USB-C",
    },
    physicalSpecification: {
      color: "Space Gray",
      dimensions: {
        height: "0.66 inches",
        width: "14.09 inches",
        depth: "9.68 inches",
      },
      weight: "2.1 kg",
    },
    warranty: "1 Year",
    publishDate: "2024-10-21T13:39:09.279+00:00",
  },
  {
    laptop: { brand: "HP", model: "Spectre x360", price: "1400", stock: 20 },
    processor: { brand: "Intel", model: "i7-1165G7", core: "Quad-Core" },
    display: {
      size: "13.5 inches",
      type: "OLED",
      resolution: "3000x2000",
      touchScreen: true,
      features: "Corning Gorilla Glass",
    },
    memory: { ram: "16GB", ramType: "LPDDR4x", removable: "Non-Removable" },
    storage: { type: "SSD", capacity: "512GB", upgradeOptions: "Yes" },
    graphics: { model: "Intel Iris Xe", memory: "Integrated" },
    keyboardAndTouchpad: {
      keyboard: { type: "Backlit", features: "Full-size" },
      touchpad: "Precision",
    },
    cameraAndAudio: {
      webcam: "1080p",
      speaker: "Bang & Olufsen",
      microphone: "Dual Array",
      audioFeatures: "HP Audio Boost",
    },
    portsAndSlots: {
      cardReader: "MicroSD",
      hdmiPort: "No",
      usbTypeC: "2",
      headphoneJack: "Yes",
    },
    networkAndConnectivity: { wifi: "WiFi 6", bluetooth: "5.1" },
    security: { fingerprintSensor: "Yes" },
    operatingSystem: "Windows 11 Home",
    power: {
      batteryType: "Li-ion",
      batteryCapacity: "66Wh",
      adapterType: "65W",
    },
    physicalSpecification: {
      color: "Nightfall Black",
      dimensions: {
        height: "0.67 inches",
        width: "11.75 inches",
        depth: "8.58 inches",
      },
      weight: "1.32 kg",
    },
    warranty: "2 Years",
    publishDate: "2024-10-21T13:39:09.279+00:00",
  },
  {
    laptop: {
      brand: "Lenovo",
      model: "ThinkPad X1 Carbon",
      price: "1800",
      stock: 12,
    },
    processor: { brand: "Intel", model: "i7-1260P", core: "12-core" },
    display: {
      size: "14 inches",
      type: "IPS",
      resolution: "1920x1200",
      touchScreen: false,
      features: "Anti-glare",
    },
    memory: { ram: "16GB", ramType: "LPDDR5", removable: "Non-Removable" },
    storage: { type: "SSD", capacity: "1TB", upgradeOptions: "Yes" },
    graphics: { model: "Intel Iris Xe", memory: "Integrated" },
    keyboardAndTouchpad: {
      keyboard: { type: "Backlit", features: "Spill-Resistant" },
      touchpad: "Precision",
    },
    cameraAndAudio: {
      webcam: "1080p",
      speaker: "Dolby Atmos",
      microphone: "Dual Array",
      audioFeatures: "Dolby Voice",
    },
    portsAndSlots: {
      cardReader: "No",
      hdmiPort: "Yes",
      usbTypeC: "2",
      headphoneJack: "Yes",
    },
    networkAndConnectivity: { wifi: "WiFi 6E", bluetooth: "5.2" },
    security: { fingerprintSensor: "Yes" },
    operatingSystem: "Windows 11 Pro",
    power: {
      batteryType: "Li-polymer",
      batteryCapacity: "57Wh",
      adapterType: "65W",
    },
    physicalSpecification: {
      color: "Black",
      dimensions: {
        height: "0.59 inches",
        width: "12.38 inches",
        depth: "8.54 inches",
      },
      weight: "1.13 kg",
    },
    warranty: "3 Years",
    publishDate: "2024-10-21T13:39:09.279+00:00",
  },
  {
    laptop: {
      brand: "Asus",
      model: "ROG Zephyrus G14",
      price: "2000",
      stock: 10,
    },
    processor: { brand: "AMD", model: "Ryzen 9 5900HS", core: "8-core" },
    display: {
      size: "14 inches",
      type: "IPS",
      resolution: "2560x1440",
      touchScreen: false,
      features: "Pantone Validated",
    },
    memory: { ram: "16GB", ramType: "DDR4", removable: "Non-Removable" },
    storage: { type: "SSD", capacity: "1TB", upgradeOptions: "Yes" },
    graphics: { model: "NVIDIA RTX 3060", memory: "6GB GDDR6" },
    keyboardAndTouchpad: {
      keyboard: { type: "Backlit", features: "RGB Lighting" },
      touchpad: "Precision",
    },
    cameraAndAudio: {
      webcam: "No",
      speaker: "Dolby Atmos",
      microphone: "Dual Array",
      audioFeatures: "AI Noise Cancellation",
    },
    portsAndSlots: {
      cardReader: "No",
      hdmiPort: "Yes",
      usbTypeC: "2",
      headphoneJack: "Yes",
    },
    networkAndConnectivity: { wifi: "WiFi 6", bluetooth: "5.1" },
    security: { fingerprintSensor: "Yes" },
    operatingSystem: "Windows 11 Home",
    power: {
      batteryType: "Li-ion",
      batteryCapacity: "76Wh",
      adapterType: "180W",
    },
    physicalSpecification: {
      color: "Eclipse Gray",
      dimensions: {
        height: "0.70 inches",
        width: "12.76 inches",
        depth: "8.74 inches",
      },
      weight: "1.7 kg",
    },
    warranty: "1 Year",
    publishDate: "2024-10-21T13:39:09.279+00:00",
  },
  {
    laptop: { brand: "Dell", model: "XPS 13", price: "1200", stock: 15 },
    processor: { brand: "Intel", model: "i7-1165G7", core: "Quad-Core" },
    display: {
      size: "13.3 inches",
      type: "LED",
      resolution: "1920x1080",
      touchScreen: false,
      features: "Anti-glare",
    },
    memory: { ram: "16GB", ramType: "DDR4", removable: "Non-Removable" },
    storage: { type: "SSD", capacity: "512GB", upgradeOptions: "Yes" },
    graphics: { model: "Intel Iris Xe", memory: "Integrated" },
    keyboardAndTouchpad: {
      keyboard: { type: "Backlit", features: "RGB Lighting" },
      touchpad: "Precision",
    },
    cameraAndAudio: {
      webcam: "720p",
      speaker: "Stereo",
      microphone: "Array",
      audioFeatures: "Waves MaxxAudio",
    },
    portsAndSlots: {
      cardReader: "No",
      hdmiPort: "No",
      usbTypeC: "2",
      headphoneJack: "Yes",
    },
    networkAndConnectivity: { wifi: "WiFi 6", bluetooth: "5.1" },
    security: { fingerprintSensor: "Yes" },
    operatingSystem: "Windows 10 Pro",
    power: {
      batteryType: "Li-ion",
      batteryCapacity: "52Wh",
      adapterType: "65W",
    },
    physicalSpecification: {
      color: "Silver",
      dimensions: {
        height: "0.58 inches",
        width: "11.6 inches",
        depth: "7.8 inches",
      },
      weight: "1.2 kg",
    },
    warranty: "2 Years",
    publishDate: "2024-10-21T13:39:09.279+00:00",
  },
  {
    laptop: {
      brand: "Apple",
      model: "MacBook Pro 16",
      price: "2500",
      stock: 8,
    },
    processor: { brand: "Apple", model: "M1 Max", core: "10-core" },
    display: {
      size: "16 inches",
      type: "Retina",
      resolution: "3456x2234",
      touchScreen: false,
      features: "True Tone",
    },
    memory: {
      ram: "32GB",
      ramType: "Unified Memory",
      removable: "Non-Removable",
    },
    storage: { type: "SSD", capacity: "1TB", upgradeOptions: "No" },
    graphics: { model: "Apple M1 Max", memory: "Integrated" },
    keyboardAndTouchpad: {
      keyboard: { type: "Magic Keyboard", features: "Backlit" },
      touchpad: "Force Touch",
    },
    cameraAndAudio: {
      webcam: "1080p",
      speaker: "Six-Speaker System",
      microphone: "Three-Mic Array",
      audioFeatures: "Spatial Audio",
    },
    portsAndSlots: {
      cardReader: "SDXC",
      hdmiPort: "Yes",
      usbTypeC: "3",
      headphoneJack: "Yes",
    },
    networkAndConnectivity: { wifi: "WiFi 6", bluetooth: "5.0" },
    security: { fingerprintSensor: "Yes" },
    operatingSystem: "macOS Monterey",
    power: {
      batteryType: "Li-polymer",
      batteryCapacity: "100Wh",
      adapterType: "140W USB-C",
    },
    physicalSpecification: {
      color: "Space Gray",
      dimensions: {
        height: "0.66 inches",
        width: "14.09 inches",
        depth: "9.68 inches",
      },
      weight: "2.1 kg",
    },
    warranty: "1 Year",
    publishDate: "2024-10-21T13:39:09.279+00:00",
  },
  {
    laptop: { brand: "HP", model: "Spectre x360", price: "1400", stock: 20 },
    processor: { brand: "Intel", model: "i7-1165G7", core: "Quad-Core" },
    display: {
      size: "13.5 inches",
      type: "OLED",
      resolution: "3000x2000",
      touchScreen: true,
      features: "Corning Gorilla Glass",
    },
    memory: { ram: "16GB", ramType: "LPDDR4x", removable: "Non-Removable" },
    storage: { type: "SSD", capacity: "512GB", upgradeOptions: "Yes" },
    graphics: { model: "Intel Iris Xe", memory: "Integrated" },
    keyboardAndTouchpad: {
      keyboard: { type: "Backlit", features: "Full-size" },
      touchpad: "Precision",
    },
    cameraAndAudio: {
      webcam: "1080p",
      speaker: "Bang & Olufsen",
      microphone: "Dual Array",
      audioFeatures: "HP Audio Boost",
    },
    portsAndSlots: {
      cardReader: "MicroSD",
      hdmiPort: "No",
      usbTypeC: "2",
      headphoneJack: "Yes",
    },
    networkAndConnectivity: { wifi: "WiFi 6", bluetooth: "5.1" },
    security: { fingerprintSensor: "Yes" },
    operatingSystem: "Windows 11 Home",
    power: {
      batteryType: "Li-ion",
      batteryCapacity: "66Wh",
      adapterType: "65W",
    },
    physicalSpecification: {
      color: "Nightfall Black",
      dimensions: {
        height: "0.67 inches",
        width: "11.75 inches",
        depth: "8.58 inches",
      },
      weight: "1.32 kg",
    },
    warranty: "2 Years",
    publishDate: "2024-10-21T13:39:09.279+00:00",
  },
  {
    laptop: {
      brand: "Lenovo",
      model: "ThinkPad X1 Carbon",
      price: "1800",
      stock: 12,
    },
    processor: { brand: "Intel", model: "i7-1260P", core: "12-core" },
    display: {
      size: "14 inches",
      type: "IPS",
      resolution: "1920x1200",
      touchScreen: false,
      features: "Anti-glare",
    },
    memory: { ram: "16GB", ramType: "LPDDR5", removable: "Non-Removable" },
    storage: { type: "SSD", capacity: "1TB", upgradeOptions: "Yes" },
    graphics: { model: "Intel Iris Xe", memory: "Integrated" },
    keyboardAndTouchpad: {
      keyboard: { type: "Backlit", features: "Spill-Resistant" },
      touchpad: "Precision",
    },
    cameraAndAudio: {
      webcam: "1080p",
      speaker: "Dolby Atmos",
      microphone: "Dual Array",
      audioFeatures: "Dolby Voice",
    },
    portsAndSlots: {
      cardReader: "No",
      hdmiPort: "Yes",
      usbTypeC: "2",
      headphoneJack: "Yes",
    },
    networkAndConnectivity: { wifi: "WiFi 6E", bluetooth: "5.2" },
    security: { fingerprintSensor: "Yes" },
    operatingSystem: "Windows 11 Pro",
    power: {
      batteryType: "Li-polymer",
      batteryCapacity: "57Wh",
      adapterType: "65W",
    },
    physicalSpecification: {
      color: "Black",
      dimensions: {
        height: "0.59 inches",
        width: "12.38 inches",
        depth: "8.54 inches",
      },
      weight: "1.13 kg",
    },
    warranty: "3 Years",
    publishDate: "2024-10-21T13:39:09.279+00:00",
  },
  {
    laptop: {
      brand: "Asus",
      model: "ROG Zephyrus G14",
      price: "2000",
      stock: 10,
    },
    processor: { brand: "AMD", model: "Ryzen 9 5900HS", core: "8-core" },
    display: {
      size: "14 inches",
      type: "IPS",
      resolution: "2560x1440",
      touchScreen: false,
      features: "Pantone Validated",
    },
    memory: { ram: "16GB", ramType: "DDR4", removable: "Non-Removable" },
    storage: { type: "SSD", capacity: "1TB", upgradeOptions: "Yes" },
    graphics: { model: "NVIDIA RTX 3060", memory: "6GB GDDR6" },
    keyboardAndTouchpad: {
      keyboard: { type: "Backlit", features: "RGB Lighting" },
      touchpad: "Precision",
    },
    cameraAndAudio: {
      webcam: "No",
      speaker: "Dolby Atmos",
      microphone: "Dual Array",
      audioFeatures: "AI Noise Cancellation",
    },
    portsAndSlots: {
      cardReader: "No",
      hdmiPort: "Yes",
      usbTypeC: "2",
      headphoneJack: "Yes",
    },
    networkAndConnectivity: { wifi: "WiFi 6", bluetooth: "5.1" },
    security: { fingerprintSensor: "Yes" },
    operatingSystem: "Windows 11 Home",
    power: {
      batteryType: "Li-ion",
      batteryCapacity: "76Wh",
      adapterType: "180W",
    },
    physicalSpecification: {
      color: "Eclipse Gray",
      dimensions: {
        height: "0.70 inches",
        width: "12.76 inches",
        depth: "8.74 inches",
      },
      weight: "1.7 kg",
    },
    warranty: "1 Year",
    publishDate: "2024-10-21T13:39:09.279+00:00",
  },
  // Add 11 more items following the same structure
];
console.log(JSON.stringify(sampleData))