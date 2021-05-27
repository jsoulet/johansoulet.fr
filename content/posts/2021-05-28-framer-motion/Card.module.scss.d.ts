declare namespace CardModuleScssNamespace {
  export interface ICardModuleScss {
    button: string
    card: string
    content: string
    desc: string
    image: string
    subtitle: string
    title: string
  }
}

declare const CardModuleScssModule: CardModuleScssNamespace.ICardModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CardModuleScssNamespace.ICardModuleScss
}

export = CardModuleScssModule
