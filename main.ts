OneNET.on_wifi_connected(function () {
    OneNET.OneNET_connect("377357", "638931619", "7373")
})
OneNET.on_mqtt_connected(function () {
    basic.showIcon(IconNames.Yes)
})
basic.showIcon(IconNames.No)
OneNET.WIFI_init(SerialPin.P13, SerialPin.P14)
OneNET.WIFI_connect("BSJY", "bosheng7373")
basic.forever(function () {
    if (OneNET.is_connected()) {
        OneNET.OneNET_send("cap", convertToText(Math.map(sensors.ping(
        DigitalPin.P16,
        DigitalPin.P15,
        PingUnit.Centimeters
        ), 0, 200, 0, 100)))
    }
    basic.pause(3000)
})
