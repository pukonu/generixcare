variable "env" {
  description = "the environment this distribution belongs to (staging or production)"
}

variable "root_domain" {
  description = "name of the root domain"
}

variable "subdomain" {
  description = "name of the domain"
}

variable "certificate_arn" {
  description = "certificate arn"
}

variable "s3_origin" {
  description = "S3 Origin name"
}

variable "origin_comment" {
  description = "Origin comment"
}

variable "cloudfront_logging_prefix" {
  description = "Cloudfront logging prefix"
}

variable "bucket_name" {
  description = "Name of the default bucket to be created for this infrastructure"
}

variable "lambda_static_redirect_arn" {
  description = "arn of a lamdba function to correct cloudfront endpoints"
}
