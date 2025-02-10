interface ApplicationDimensions {
  width: number | undefined;
  height: number | undefined;
}

class ChildIframeDocumentResizer {
  public appContainer: HTMLElement | null;

  constructor() {
    this.appContainer = document.getElementById("root");
  }

  subscribeToDimensionResize(): void {
    window.addEventListener("resize", () => this.sendDimensionsToParent());
  }

  sendDimensionsToParent(): void {
    const height: number | undefined = this.getElementHeight();
    const width: number | undefined = this.getElementWidth();

    const transferObject: ApplicationDimensions = {
      width,
      height,
    };

    window.parent.postMessage(transferObject, "*");
  }

  private getElementHeight(): number | undefined {
    const height: number | undefined = this.appContainer?.offsetHeight;
    const heightIsUndefined: boolean = this.numberIsNull(height);
    console.log(`The height is: ${height}px`);

    return height;
  }

  private getElementWidth(): number | undefined {
    const width: number | undefined = this.appContainer?.offsetWidth;
    const widthIsUndefined: boolean = this.numberIsNull(width);
    console.log(`width: ${width}px`);
    return width;
  }

  private numberIsNull(num: number | undefined): boolean {
    if (num == undefined) return true;
    else return false;
  }
}

export default ChildIframeDocumentResizer;
