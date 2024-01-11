import {Fragment} from "react"
import {
    Category,
    Component,
    Variant,
    Palette,
} from "@react-buddy/ide-toolbox"

export function PaletteTree() {
  return <Palette>
        <Category name="App">
            <Component name="Loader">
                <Variant>
                    <ExampleLoaderComponent/>
                </Variant>
            </Component>
        </Category>
    </Palette>
}

export function ExampleLoaderComponent() {
    return (
        <>Loading...</>
    )
}