local isUiOpen = false

-- exports["elite-info"]:open(string: text, int: time)
local function open(text, timer)
    isUiOpen = true
    SendNUIMessage({
        action = "open",
        text = text,
        timer = timer
    })
end

exports("open", open)

-- exports["elite-info"]:update(string: text, int: time)
local function update(text, timer)
    SendNUIMessage({
        action = "update",
        text = text,
        timer = timer
    })
end

exports("update", update)

-- exports["elite-info"]:close()
local function close()
    isUiOpen = false
    SendNUIMessage({
        action = "close"
    })
end

exports("close", close)

-- exports["elite-info"]:isUiOpen()
exports("isUiOpen", function()
    return isUiOpen
end)