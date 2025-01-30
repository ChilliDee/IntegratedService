import { useQueryParams } from "../../../sharedHooks/useQueryParams";

export class QueryStringParameterSelector {
  applicantIdQueryStringParameter: string | null = null;
  guidQueryStringParameter: string | null = null;
  queryStringParameter: string = "";
  isPreview: boolean = false;

  ExtractGuidParamType() {
    const queryParams = useQueryParams();
    const guid = queryParams.get("guid");

    this.guidQueryStringParameter = guid;
  }

  ExtractPreviewParamType() {
    const queryParams = useQueryParams();
    const isPreview = queryParams.get("isPreview");

    if (isPreview != null && isPreview == "1") {
      this.isPreview = true;
    }
  }

  GenerateQueryStringParam() {
    this.queryStringParameter = `?guid=${this.guidQueryStringParameter}&isPreview=${this.isPreview}`;
  }
}
