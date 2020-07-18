data "aws_route53_zone" "zone" {
  name         = "${var.root_domain}."
}

resource "aws_route53_record" "admin-record" {
  zone_id = data.aws_route53_zone.zone.zone_id
  name    = "${var.subdomain}.${var.root_domain}."
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.distribution-cdn.domain_name
    zone_id                = aws_cloudfront_distribution.distribution-cdn.hosted_zone_id
    evaluate_target_health = false
  }
}
