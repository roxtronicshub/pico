// Pi Pico Control Interface
document.addEventListener('DOMContentLoaded', function() {
    // Digital Output Controls
    const led1 = document.getElementById('led1');
    const led2 = document.getElementById('led2');

    // Analog Controls
    const pwm1 = document.getElementById('pwm1');
    const pwm1Value = document.getElementById('pwm1-value');
    const pwm2 = document.getElementById('pwm2');
    const pwm2Value = document.getElementById('pwm2-value');

    // Update PWM values
    function updatePWMValue(input, display) {
        const value = input.value;
        display.textContent = `${value}%`;
        // Here you would typically send this value to Pi Pico
        console.log(`PWM value changed: ${value}%`);
    }

    // Digital LED Control
    function updateLED(ledId) {
        const state = document.getElementById(ledId).checked;
        // Here you would typically send this state to Pi Pico
        console.log(`LED ${ledId} state changed: ${state}`);
    }

    // Event Listeners
    led1.addEventListener('change', () => updateLED('led1'));
    led2.addEventListener('change', () => updateLED('led2'));

    pwm1.addEventListener('input', () => updatePWMValue(pwm1, pwm1Value));
    pwm2.addEventListener('input', () => updatePWMValue(pwm2, pwm2Value));

    // Initialize sensor readings
    function updateSensorReadings() {
        // Here you would typically fetch real sensor data from Pi Pico
        // For now, just simulate some values
        document.querySelector('.sensor-value:first-child').textContent = `${Math.floor(Math.random() * 30 + 20)}°C`;
        document.querySelector('.sensor-value:last-child').textContent = `${Math.floor(Math.random() * 30 + 40)}%`;
    }

    // Update sensor readings every 5 seconds
    setInterval(updateSensorReadings, 5000);

    // Initial sensor update
    updateSensorReadings();
});
