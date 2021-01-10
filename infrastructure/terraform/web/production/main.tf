terraform {
  required_version = ">= 0.12"
}

provider "aws" {
  region                  = var.aws_region
  shared_credentials_file = var.credential_path
  profile                 = var.profile
}

module "webapp" {
  source = "../../modules/webapp"
  root_domain = var.root_domain
  subdomain = var.subdomain
  certificate_arn = var.certificate_arn
  bucket_name = var.bucket_name
  env = var.env
  s3_origin = var.s3_origin
  origin_comment = var.origin_comment
  cloudfront_logging_prefix = var.cloudfront_logging_prefix
  lambda_static_redirect_arn = var.lambda_static_redirect_arn
}
