
resource "aws_s3_bucket" "bucket-log" {
  bucket = "${var.bucket_name}-logs"
  acl    = "log-delivery-write"

  force_destroy = true
}

resource "aws_s3_bucket" "bucket" {
  bucket = var.bucket_name
  acl    = "public-read"
  policy = <<EOF
{
    "Version": "2012-10-17",
    "Id": "Policy1586533735429",
    "Statement": [
        {
            "Sid": "Stmt1586533481958",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "*",
            "Resource": "arn:aws:s3:::${var.bucket_name}/*"
        }
    ]
}
EOF

  website {
    index_document = "index.html"
    error_document = "index.html"

    routing_rules = <<EOF
[{
    "Condition": {
        "KeyPrefixEquals": "docs/"
    },
    "Redirect": {
        "ReplaceKeyPrefixWith": "documents/"
    }
}]
EOF
  }

  versioning {
    enabled = false
  }

  logging {
    target_bucket = aws_s3_bucket.bucket-log.id
    target_prefix = "${var.bucket_name}/log/"
  }

  force_destroy = true

//  cors_rule {
//    allowed_headers = ["*"]
//    allowed_methods = ["PUT", "POST"]
//    allowed_origins = ["https://s3-website-test.hashicorp.com"]
//    expose_headers  = ["ETag"]
//    max_age_seconds = 3000
//  }
}

