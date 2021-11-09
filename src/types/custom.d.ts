
declare module "*.svg" {
    const content: any
    export default content
}

declare module '@emotion/styled' {
    import styled from 'react-emotion'
    export * from 'react-emotion'
    export default styled
}

declare module '*.png'