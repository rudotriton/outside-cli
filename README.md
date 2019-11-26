# outside-cli

> Logs the current weather conditions at a location or the next 5 day forecast.

Note that this package requires an API key from [OpenWeather](https://openweathermap.org).


```bash
npm install -g rudo-outside-cli
```

## Set API key

```bash
> outside set <API_KEY>
```

## Commands

```bash
# get current weather somewhere
> outside today London

#    Current conditions in London:
#    
#        10.5°C and light rain.

# get the next 5 day forecast
> outside forecast London

#    Forecast for London:
#    
#        11/27 - Temp: 11.0°C - Condition: light rain
#        11/28 - Temp:  9.6°C - Condition: overcast clouds
#        11/29 - Temp:  5.8°C - Condition: clear sky
#        11/30 - Temp:  5.3°C - Condition: clear sky
#        12/01 - Temp:  5.5°C - Condition: clear sky
```