output "distribution-id" {
  value = aws_cloudfront_origin_access_identity.access-identity.id
}

resource "local_file" "api-alb" {
  content  = aws_cloudfront_origin_access_identity.access-identity.id
  filename = "outputs/distribution.txt"
}
